/**
 * test scenario for shared action
 *
 * - asyncLeaderboards thunk
 *  - should dispatch actions correctly when data fetching is successful
 *  - should handle errors correctly when data fetching fails
 */

import { describe, it, expect, vi } from "vitest";
import { hideLoading, showLoading } from "react-redux-loading-bar";
import { seeLeaderboards } from "../../services/leaderboards";
import {
  ActionType,
  receiveLeaderboardsActionCreator,
  asyncReceiveLeaderboardsActionCreator,
} from "./action";

vi.mock("react-redux-loading-bar", () => ({
  showLoading: vi.fn(),
  hideLoading: vi.fn(),
}));

vi.mock("../../services/leaderboards", () => ({
  seeLeaderboards: vi.fn(),
}));

describe("Action Creators", () => {
  it("should create receiveLeaderboardsActionCreator action", () => {
    const leaderboards = [{ id: 1, name: "Leaderboard 1" }];
    const action = receiveLeaderboardsActionCreator(leaderboards);

    expect(action).toEqual({
      type: ActionType.RECEIVE_LEADERBOARDS,
      payload: {
        leaderboars: leaderboards,
      },
    });
  });
});

describe("asyncReceiveLeaderboardsActionCreator", () => {
  it("should dispatch actions correctly when fetch is successful", async () => {
    const dispatch = vi.fn();
    const leaderboards = [{ id: 1, name: "Leaderboard 1" }];
    seeLeaderboards.mockResolvedValue({
      data: { leaderboards },
    });

    await asyncReceiveLeaderboardsActionCreator()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(seeLeaderboards).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(
      receiveLeaderboardsActionCreator(leaderboards)
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it("should handle errors correctly when fetch fails", async () => {
    const dispatch = vi.fn();
    const errorMessage = "Error fetching leaderboards";
    seeLeaderboards.mockRejectedValue({
      response: { data: { message: errorMessage } },
    });
    global.alert = vi.fn();

    await asyncReceiveLeaderboardsActionCreator()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(seeLeaderboards).toHaveBeenCalled();
    expect(global.alert).toHaveBeenCalledWith(errorMessage);
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
