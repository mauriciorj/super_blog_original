import produce from 'immer';
import { handleActions } from 'redux-actions';
import {
  setCarouselPostsError,
  setCarouselPostsSuccess,
  setFeedPostsError,
  setFeedPostsSuccess,
  setIsCarouselPostsLoading,
  setIsFeedPostsLoading,
  setIsPostListLoading,
  setIsTopicsLoading,
  setIsTrendingPostsLoading,
  setPostListError,
  setPostListSuccess,
  setTopicsError,
  setTopicsSuccess,
  setTrendingPostsError,
  setTrendingPostsSuccess,
} from './actions';

export const initialState = {
  carouselPosts: null,
  carouselPostsError: null,
  feedPosts: null,
  feedPostsError: null,
  isCarouselPostsLoading: false,
  isFeedPostsLoading: false,
  isPostLoading: false,
  isPostError: false,
  isTopicsLoading: false,
  isTrendingPostsLoading: false,
  postList: {},
  topics: null,
  topicsError: null,
  trendingPosts: null,
  trendingPostsError: null,
};

const homeReducer = handleActions(
  {
    [setCarouselPostsError as any]: produce(
      (state = initialState, { payload }) => ({
        ...state,
        carouselPostsError: payload,
      })
    ),
    [setCarouselPostsSuccess as any]: produce(
      (state = initialState, { payload }) => ({
        ...state,
        carouselPosts: payload,
        carouselPostsError: false,
      })
    ),
    [setFeedPostsError as any]: produce(
      (state = initialState, { payload }) => ({
        ...state,
        feedPostsError: payload,
      })
    ),
    [setFeedPostsSuccess as any]: produce(
      (state = initialState, { payload }) => ({
        ...state,
        feedPosts: payload,
        feedPostsError: false,
      })
    ),
    [setIsCarouselPostsLoading as any]: produce(
      (state = initialState, { payload }) => ({
        ...state,
        isCarouselPostsLoading: payload,
      })
    ),
    [setIsFeedPostsLoading as any]: produce(
      (state = initialState, { payload }) => ({
        ...state,
        isFeedPostsLoading: payload,
      })
    ),
    [setIsPostListLoading as any]: produce(
      (state = initialState, { payload }) => ({
        ...state,
        isPostListLoading: payload,
      })
    ),
    [setIsTopicsLoading as any]: produce(
      (state = initialState, { payload }) => ({
        ...state,
        isTopicsLoading: payload,
      })
    ),
    [setIsTrendingPostsLoading as any]: produce(
      (state = initialState, { payload }) => ({
        ...state,
        isTrendingPostsLoading: payload,
      })
    ),
    [setPostListSuccess as any]: produce(
      (state = initialState, { payload }: any) => ({
        ...state,
        isPostListError: false,
        postList: { ...state.postList, [payload.slug]: payload },
      })
    ),
    [setPostListError as any]: produce((state = initialState, { payload }) => ({
      ...state,
      isPostListError: payload,
    })),
    [setTopicsError as any]: produce((state = initialState, { payload }) => ({
      ...state,
      topicsError: payload,
    })),
    [setTopicsSuccess as any]: produce((state = initialState, { payload }) => ({
      ...state,
      topics: payload,
      topicsError: false,
    })),
    [setTrendingPostsError as any]: produce(
      (state = initialState, { payload }) => ({
        ...state,
        trendingPostsError: payload,
      })
    ),
    [setTrendingPostsSuccess as any]: produce(
      (state = initialState, { payload }) => ({
        ...state,
        trendingPosts: payload,
        trendingPostsError: false,
      })
    ),
  },
  initialState
);

export default homeReducer;
