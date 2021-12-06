/*
 * @Date: 2021-12-06 21:22:26
 * @LastEditors: chuhongguang
 */
export const state = () => {
  return {
    // 当前登录用户的登录状态
    user: null
  }
}

export const mutations = {
  setUser(state,data) {
    state.user = data
  }
}

export const actions = {}