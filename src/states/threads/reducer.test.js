/* eslint-disable max-len */
/**
 * test scenario for threadsReducer
 *
 * - threadsReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the threads when given by RECEIVE_THREADS action
 *  - should return the threads with the new thread when given by CREATE_THREAD action
 *  - should return the threads with toggled up vote thread when given by UP_VOTE_THREAD action
 *  - should return the threads with toggled down vote thread when given by DOWN_VOTE_THREAD action
 *  - should return the threads without toggled down vote and up vote thread when given by NEUTRALIZE_VOTE_THREAD action
 *
 */

import { describe, expect, it } from "vitest";
import threadsReducer from "./reducer";

describe("threadsReducer function", () => {
  it("should return the initial state when given by unknown action", () => {
    const initialState = [];
    const action = {
      type: "UNKNOWN",
    };

    const nextState = threadsReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it("should return the threads when given by RECEIVE_THREADS", () => {
    const initialState = [];
    const action = {
      type: "RECEIVE_THREADS",
      payload: {
        threads: [
          {
            id: "thread-1",
            title: "Thread Pertama",
            body: "Ini adalah thread pertama",
            category: "General",
            createdAt: "2021-06-21T07:00:00.000Z",
            ownerId: "users-1",
            upVotesBy: [],
            downVotesBy: [],
          },
        ],
      },
    };

    const nextState = threadsReducer(initialState, action);

    expect(nextState).toEqual(action.payload.threads);
  });

  it("should return the threads with the new thread when given by CREATE_THREAD", () => {
    const initialState = [
      {
        id: "thread-1",
        title: "Thread Pertama",
        body: "Ini adalah thread pertama",
        category: "General",
        createdAt: "2021-06-21T07:00:00.000Z",
        ownerId: "users-1",
        upVotesBy: [],
        downVotesBy: [],
      },
    ];
    const action = {
      type: "CREATE_THREAD",
      payload: {
        thread: {
          id: "thread-2",
          title: "Thread Kedua",
          body: "Ini adalah thread kedua",
          category: "General",
          createdAt: "2021-06-21T07:00:00.000Z",
          ownerId: "users-2",
          upVotesBy: [],
          downVotesBy: [],
        },
      },
    };

    const nextState = threadsReducer(initialState, action);

    expect(nextState).toEqual([action.payload.thread, ...initialState]);
  });

  it("should return the threads with toggled up vote thread when given by UP_VOTE_THREAD", () => {
    const initialState = [
      {
        id: "thread-1",
        title: "Thread Pertama",
        body: "Ini adalah thread pertama",
        category: "General",
        createdAt: "2021-06-21T07:00:00.000Z",
        ownerId: "users-1",
        upVotesBy: [],
        downVotesBy: [],
      },
    ];
    const action = {
      type: "UP_VOTE_THREAD",
      payload: {
        threadId: "thread-1",
        userId: "users-1",
      },
    };

    const nextState = threadsReducer(initialState, action);

    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [action.payload.userId],
        downVotesBy: [],
      },
    ]);
  });

  it("should return the threads with toggled down vote thread when given by DOWN_VOTE_THREAD", () => {
    const initialState = [
      {
        id: "thread-1",
        title: "Thread Pertama",
        body: "Ini adalah thread pertama",
        category: "General",
        createdAt: "2021-06-21T07:00:00.000Z",
        ownerId: "users-1",
        upVotesBy: [],
        downVotesBy: [],
      },
    ];
    const action = {
      type: "DOWN_VOTE_THREAD",
      payload: {
        threadId: "thread-1",
        userId: "users-1",
      },
    };

    const nextState = threadsReducer(initialState, action);

    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [],
        downVotesBy: [action.payload.userId],
      },
    ]);
  });

  it("should return the threads without toggled down vote and up vote thread when given by NEUTRALIZE_VOTE_THREAD", () => {
    const initialState = [
      {
        id: "thread-1",
        title: "Thread Pertama",
        body: "Ini adalah thread pertama",
        category: "General",
        createdAt: "2021-06-21T07:00:00.000Z",
        ownerId: "users-1",
        upVotesBy: [],
        downVotesBy: [],
      },
    ];
    const action = {
      type: "NEUTRALIZE_VOTE_THREAD",
      payload: {
        threadId: "thread-1",
        userId: "users-1",
      },
    };

    const nextState = threadsReducer(initialState, action);

    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [],
        downVotesBy: [],
      },
    ]);
  });
});
