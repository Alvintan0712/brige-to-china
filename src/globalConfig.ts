/**
 * 全局配置
 */
export const globalConfig = {
  // 初始主题（localStorage未设定的情况）
  initTheme: {
    // 初始为亮色主题
    dark: false,
    // 初始主题色
    // 与customColorPrimary数组中的某个值对应
    // null表示默认使用Ant Design默认主题色或customColorPrimary第一种主题色方案
    colorPrimary: '#00b96b',
  },
  // 供用户选择的主题色，如不提供该功能，则设为空数组
  customColorPrimary: ['#1677ff', '#f5222d', '#fa8c16', '#722ed1', '#13c2c2', '#52c41a'],
  // localStorage用户主题信息标识
  SESSION_LOGIN_THEME: 'userTheme',
  // localStorage用户登录信息标识
  SESSION_LOGIN_INFO: 'userLoginInfo',
  uploadUrl: '',
  downloadUrl: 'https://video.sakuraoy.top/',
  devBaseUrl: 'http://36.26.69.161:8082/',
  prodBaseUrl: 'http://localhost:8088',
};