import { call, takeLatest, put } from '@redux-saga/core/effects';
import { getAxios, getAPIUrl } from '../../utils/axios';
import {
  setCarouselPosts,
  setCarouselPostsError,
  setCarouselPostsSuccess,
  setFeedPosts,
  setFeedPostsError,
  setFeedPostsSuccess,
  setIsCarouselPostsLoading,
  setIsFeedPostsLoading,
  setIsPostListLoading,
  setIsTopicsLoading,
  setPostList,
  setPostListError,
  setPostListSuccess,
  setTopics,
  setTopicsError,
  setTopicsSuccess,
  setTrendingPosts,
  setTrendingPostsSuccess,
  setTrendingPostsError,
  setIsTrendingPostsLoading,
} from './actions';
import {
  CAROUSEL_POST_URI,
  POST_URI,
  POSTS_URI,
  TOPICS_URI,
  TRENDING_POSTS_URI,
} from '../../utils/constants';

export interface CarouselPostsResponse {
  data: any;
}
export interface postsResponse {
  data: any;
}
export interface TopicsResponse {
  data: any;
}

export function* setCarouselPostsEvent() {
  yield put(setIsCarouselPostsLoading(true));
  try {
    const carouselPosts: CarouselPostsResponse = yield call(getAxios, {
      url: getAPIUrl(CAROUSEL_POST_URI),
    });
    yield put(setCarouselPostsSuccess(carouselPosts.data));
  } catch (error) {
    yield put(setCarouselPostsError(true));
  } finally {
    yield put(setIsCarouselPostsLoading(false));
  }
}

export function* setFeedPostsEvent({ payload }: any) {
  yield put(setIsFeedPostsLoading(true));
  try {
    const uri = !payload ? POSTS_URI : `${POSTS_URI}?feedPage=${payload}`;
    const posts: postsResponse = yield call(getAxios, { url: getAPIUrl(uri) });
    yield put(setFeedPostsSuccess(posts.data));
  } catch (error) {
    yield put(setFeedPostsError(true));
  } finally {
    yield put(setIsFeedPostsLoading(false));
  }
}

export function* setPostListEvent({ payload }: any) {
  yield put(setIsPostListLoading(true));
  try {
    const uri = `${POST_URI}?slug=${payload}`;
    const post: postsResponse = yield call(getAxios, { url: getAPIUrl(uri) });
    yield put(setPostListSuccess(post.data));
  } catch (error) {
    yield put(setPostListError(true));
  } finally {
    yield put(setIsPostListLoading(false));
  }
}

export function* setTopicsEvent() {
  yield put(setIsTopicsLoading(true));
  try {
    const topics: TopicsResponse = yield call(getAxios, {
      url: getAPIUrl(TOPICS_URI),
    });
    yield put(setTopicsSuccess(topics.data));
  } catch (error) {
    yield put(setTopicsError(true));
  } finally {
    yield put(setIsTopicsLoading(false));
  }
}

export function* setTrendingPostsEvent() {
  yield put(setIsTrendingPostsLoading(true));
  try {
    const topics: TopicsResponse = yield call(getAxios, {
      url: getAPIUrl(TRENDING_POSTS_URI),
    });
    yield put(setTrendingPostsSuccess(topics.data));
  } catch (error) {
    yield put(setTrendingPostsError(true));
  } finally {
    yield put(setIsTrendingPostsLoading(false));
  }
}

export default function* homeSaga() {
  yield takeLatest(setCarouselPosts().type, setCarouselPostsEvent);
  yield takeLatest(setFeedPosts().type, setFeedPostsEvent);
  yield takeLatest(setPostList().type, setPostListEvent);
  yield takeLatest(setTopics().type, setTopicsEvent);
  yield takeLatest(setTrendingPosts().type, setTrendingPostsEvent);
}
