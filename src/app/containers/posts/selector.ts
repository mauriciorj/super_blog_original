import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectState = (state: any) => state.posts || initialState;

export const makeSelectCarouselPosts = () =>
  createSelector(selectState, (state) => state.carouselPosts);

export const makeSelectFeedPosts = () =>
  createSelector(selectState, (state) => state.feedPosts);

export const makeSelectTopics = () =>
  createSelector(selectState, (state) => state.topics);

export const makeSelectTrendingPosts = () =>
  createSelector(selectState, (state) => state.trendingPosts);

export const makeSelectPostList = (postId: any) =>
  createSelector(selectState, (state) => state.postList[postId]);
