/*
 * @Date: 2021-12-07 07:16:39
 * @desc: chuhongguang
 */
export default function ({ store, redirect }) {
  // 已经登录了, 跳转到首页
  if (store.state.user) {
    return redirect('/')
  }
}
