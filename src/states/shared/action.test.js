/**
 * test scenario for shared action
 *
 * - asyncPopulateUsersAndTalks thunk
 *  - should dispatch actions correctly when data fetching is successful
 *  - should handle errors correctly when data fetching fails
 */

import { describe, it, expect, vi } from "vitest";
import { hideLoading, showLoading } from "react-redux-loading-bar";
import { getAllUsers } from "../../services/users";
import { getAllThreads } from "../../services/threads";
import { receiveUsersActionCreator } from "../users/action";
import { receiveThreadsActionCreator } from "../threads/action";
import { asyncPopulateUsersAndThreads } from "./action";

vi.mock("react-redux-loading-bar", () => ({
  showLoading: vi.fn(),
  hideLoading: vi.fn(),
}));

vi.mock("../../services/users", () => ({
  getAllUsers: vi.fn(),
}));

vi.mock("../../services/threads", () => ({
  getAllThreads: vi.fn(),
}));

vi.mock("../users/action", () => ({
  receiveUsersActionCreator: vi.fn(),
}));

vi.mock("../threads/action", () => ({
  receiveThreadsActionCreator: vi.fn(),
}));

describe("asyncPopulateUsersAndThreads", () => {
  it("should dispatch actions correctly when data fetching is successful", async () => {
    const dispatch = vi.fn();
    const users = [{ id: 1, name: "User 1" }];
    const threads = [{ id: 1, title: "Thread 1" }];

    getAllUsers.mockResolvedValue({ users });
    getAllThreads.mockResolvedValue({ threads });

    await asyncPopulateUsersAndThreads()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(getAllUsers).toHaveBeenCalled();
    expect(getAllThreads).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(receiveUsersActionCreator(users));
    expect(dispatch).toHaveBeenCalledWith(receiveThreadsActionCreator(threads));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it("should handle errors correctly when data fetching fails", async () => {
    const dispatch = vi.fn();
    const errorMessage = "Error fetching data";

    getAllUsers.mockRejectedValue({
      response: { data: { message: errorMessage } },
    });
    global.alert = vi.fn();

    await asyncPopulateUsersAndThreads()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(getAllUsers).toHaveBeenCalled();
    expect(global.alert).toHaveBeenCalledWith(errorMessage);
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
