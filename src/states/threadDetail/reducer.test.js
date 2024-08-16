/**
 * test scenario for threadDetailReducer
 *
 * - threadDetailReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the thread detail when given by RECEIVE_THREAD_DETAIL action
 *  - should return the thread detail with toggled up vote when given
 *    by UP_VOTE_THREAD_DETAIL action
 *  - should return the thread detail with toggled down vote when given
 *    by DOWN_VOTE_THREAD_DETAIL action
 *  - should return the thread detail without toggled up vote and down vote when given
 *    by NEUTRALIZE_VOTE_THREAD_DETAIL action
 *  - should return the thread detail with new comment when given by CREATE_COMMENT action
 *  - should return the thread detail with toggled up vote comment when given
 *    by UP_VOTE_COMMENT action
 *  - should return the thread detail with toggled down vote comment when given
 *    by DOWN_VOTE_COMMENT action
 *  - should return the thread detail without toggled up vote and down vote comment
 *    when given by NEUTRALIZE_VOTE_COMMENT action
 *
 */

import { describe, expect, it } from "vitest";
import threadDetailReducer from "./reducer";

describe("threadDetailReducer function", () => {
  it("should return the initial state when given by unknown action", () => {
    const initialState = null;
    const action = {
      type: "UNKNOWN",
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it("should return the thread detail when given by RECEIVE_THREAD_DETAIL action", () => {
    const initialState = null;
    const action = {
      type: "RECEIVE_THREAD_DETAIL",
      payload: {
        threadDetail: {
          id: "thread-1",
          title: "Thread Pertama",
          body: "Ini adalah thread pertama",
          category: "General",
          createdAt: "2021-06-21T07:00:00.000Z",
          owner: {},
          upVotesBy: [],
          downVotesBy: [],
          comments: [],
          created: "2022-01-22T10:06:55.588Z",
        },
      },
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual(action.payload.threadDetail);
  });

  it("should return the thread detail with toggled up vote when given by UP_VOTE_THREAD_DETAIL action", () => {
    const initialState = {
      id: "thread-1",
      title: "Thread Pertama",
      body: "Ini adalah thread pertama",
      category: "General",
      createdAt: "2021-06-21T07:00:00.000Z",
      owner: {},
      upVotesBy: [],
      downVotesBy: [],
      comments: [],
      created: "2022-01-22T10:06:55.588Z",
    };
    const action = {
      type: "UP_VOTE_THREAD_DETAIL",
      payload: {
        userId: "user-1",
      },
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: [action.payload.userId],
      downVotesBy: [],
    });
  });

  it("should return the thread detail with toggled down vote when given by DOWN_VOTE_THREAD_DETAIL action", () => {
    const initialState = {
      id: "thread-1",
      title: "Thread Pertama",
      body: "Ini adalah thread pertama",
      category: "General",
      createdAt: "2021-06-21T07:00:00.000Z",
      owner: {},
      upVotesBy: [],
      downVotesBy: [],
      comments: [],
      created: "2022-01-22T10:06:55.588Z",
    };
    const action = {
      type: "DOWN_VOTE_THREAD_DETAIL",
      payload: {
        userId: "user-1",
      },
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: [],
      downVotesBy: [action.payload.userId],
    });
  });

  it("should return the thread detail without toggled up vote and down vote when given by NEUTRALIZE_VOTE_THREAD_DETAIL action", () => {
    const initialState = {
      id: "thread-1",
      title: "Thread Pertama",
      body: "Ini adalah thread pertama",
      category: "General",
      createdAt: "2021-06-21T07:00:00.000Z",
      owner: {},
      upVotesBy: [],
      downVotesBy: [],
      comments: [],
      created: "2022-01-22T10:06:55.588Z",
    };
    const action = {
      type: "NEUTRALIZE_VOTE_THREAD_DETAIL",
      payload: {
        userId: "user-1",
      },
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: [],
      downVotesBy: [],
    });
  });

  it("should return the thread detail with new comment when given by CREATE_COMMENT action", () => {
    const initialState = {
      id: "thread-1",
      title: "Thread Pertama",
      body: "Ini adalah thread pertama",
      category: "General",
      createdAt: "2021-06-21T07:00:00.000Z",
      owner: {},
      upVotesBy: [],
      downVotesBy: [],
      comments: [],
      created: "2022-01-22T10:06:55.588Z",
    };
    const action = {
      type: "CREATE_COMMENT",
      payload: {
        comment: {
          id: "comment-1",
          body: "Ini adalah comment pertama",
          owner: {},
          upVotesBy: [],
          downVotesBy: [],
          created: "2022-01-22T10:06:55.588Z",
        },
      },
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      comments: [action.payload.comment, ...initialState.comments],
    });
  });

  it("should return the thread detail with toggled up vote when given by UP_VOTE_COMMENT action", () => {
    const initialState = {
      id: "thread-1",
      title: "Thread Pertama",
      body: "Ini adalah thread pertama",
      category: "General",
      createdAt: "2021-06-21T07:00:00.000Z",
      owner: {},
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: "comment-1",
          body: "Ini adalah comment pertama",
          owner: { id: "users-1", name: "John Doe", email: "john@example.com" },
          upVotesBy: [],
          downVotesBy: [],
          created: "2022-01-22T10:06:55.588Z",
        },
      ],
      created: "2022-01-22T10:06:55.588Z",
    };
    const action = {
      type: "UP_VOTE_COMMENT",
      payload: {
        commentId: "comment-1",
        userId: "user-1",
      },
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          upVotesBy: [action.payload.userId],
          downVotesBy: [],
        },
      ],
    });
  });

  it("should return the thread detail with toggled down vote when given by DOWN_VOTE_COMMENT action", () => {
    const initialState = {
      id: "thread-1",
      title: "Thread Pertama",
      body: "Ini adalah thread pertama",
      category: "General",
      createdAt: "2021-06-21T07:00:00.000Z",
      owner: {},
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: "comment-1",
          body: "Ini adalah comment pertama",
          owner: { id: "users-1", name: "John Doe", email: "john@example.com" },
          upVotesBy: [],
          downVotesBy: [],
          created: "2022-01-22T10:06:55.588Z",
        },
      ],
      created: "2022-01-22T10:06:55.588Z",
    };
    const action = {
      type: "DOWN_VOTE_COMMENT",
      payload: {
        commentId: "comment-1",
        userId: "user-1",
      },
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          upVotesBy: [],
          downVotesBy: [action.payload.userId],
        },
      ],
    });
  });

  it("should return the thread detail without toggled up vote and down vote comment when given by NEUTRALIZE_VOTE_COMMENT action", () => {
    const initialState = {
      id: "thread-1",
      title: "Thread Pertama",
      body: "Ini adalah thread pertama",
      category: "General",
      createdAt: "2021-06-21T07:00:00.000Z",
      owner: {},
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: "comment-1",
          body: "Ini adalah comment pertama",
          owner: { id: "users-1", name: "John Doe", email: "john@example.com" },
          upVotesBy: [],
          downVotesBy: [],
          created: "2022-01-22T10:06:55.588Z",
        },
      ],
      created: "2022-01-22T10:06:55.588Z",
    };
    const action = {
      type: "NEUTRALIZE_VOTE_COMMENT",
      payload: {
        commentId: "comment-1",
        userId: "user-1",
      },
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    });
  });
});
