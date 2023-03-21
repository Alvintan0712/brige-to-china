/** @format */
import { api } from './api';
import { PostQuestionParam } from '@/types/request';

export function getQuestionList(param) {
  return api.get('/question/list/test', param);
}

export function postQuestion(param: PostQuestionParam) {
  return {
    url: '/question/add',
    method: 'post',
    data: param,
  };
}

/**
 * 点赞
 * @param param
 */
export function likeQuestion(param) {
  return {
    url: '/question/like',
    method: 'post',
    data: param,
  };
}

/**
 * 取消赞
 * @param param
 */
export function unlikeQuestion(param) {
  return {
    url: '/question/unlike',
    method: 'post',
    data: param,
  };
}

export function getQuestionDetail(id) {
  return api.get(`/question/detail/${id}`);
}

/**
 * 设置最佳答案
 * @param param
 */
export function setBestAnswer(param) {
  return api.post('/question/setBestAnswer', param);
}

/**
 * 获取标签列表
 * @param param
 */
export function getTagList(param) {
  return {
    url: '/tag/list',
    method: 'post',
    data: param,
  };
}

/**
 * 生成标签
 * @param param
 */
export function generateTag(param) {
  return {
    url: '/tag/autoComplete',
    method: 'post',
    data: param,
  };
}

/**
 * 生成标签
 * @param param
 */
export function generateTitle(param) {
  return {
    url: '/question/generateTitle',
    method: 'post',
    data: param,
  };
}


export function getAddView(id) {
  return api.get(`/question/addView/${id}`);
}
