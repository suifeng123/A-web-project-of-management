/**
 * action 会收到 store 作为它的第一个参数
 * 既然我们只对事件的分发（dispatch 对象）感兴趣。（state 也可以作为可选项放入）
 * 我们可以利用 ES6 的解构（destructuring）功能来简化对参数的导入
 */
const increment = ({ commit, state }) => {
  commit('increment', 1)
}

const updateMessage = ({ commit, state }, e) => {
  commit('updateMessage', e.target.value)
}

const  changeLeft1 = ({ commit,state}) => {
   commit('changeleft_flag1')
}

const  changeLeft2 = ({ commit,state}) => {
  commit('changeleft_flag2')
}

const  changeLeft3 = ({ commit,state}) => {
  commit('changeleft_flag3')
}

const  changeLeft4 = ({ commit,state}) => {
  commit('changeleft_flag4')
}

const  changeLeft5 = ({ commit,state}) => {
  commit('changeleft_flag5')
}

const decrement = ({ commit, state }) => {
  commit('decrement', 1)
}

const addNote = ({ commit, state }) => {
  commit('ADD_NOTE')
}

const editNote = ({ commit, state }, e) => {
  commit('EDIT_NOTE', e.target.value)
}

const deleteNote = ({ commit, state }) => {
  commit('DELETE_NOTE')
}

const updateActiveNote = ({ commit, state }, note) => {
  commit('SET_ACTIVE_NOTE', note)
}

const toggleFavorite = ({ commit, state }) => {
  commit('TOGGLE_FAVORITE')
}

const changeTab = ({ commit,state }, e) => {
  //console.log(e)
  commit('CHANGE_TAB_STORAGE',e.target.innerText)
}

export { increment, updateMessage, decrement, addNote, editNote, deleteNote, updateActiveNote, toggleFavorite,
         changeTab,changeLeft1,changeLeft2,changeLeft3,changeLeft4,changeLeft5


}
