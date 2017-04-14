/**
 * 这个 getter 函数会返回 count 的值
 * 在 ES6 里你可以这样写
 * export const getCount = state => state.count
 */
// TODO 去获取所需要的状态

const getLeftflag1 = state => state.left_flag1

const  getLeftflag2 = state => state.left_flag2

const getLeftflag3 = state => state.left_flag3

const getLeftflag4 = state => state.left_flag4

const getLeftflag5 = state => state.left_flag5

const getCount = state => state.count

const notes = state => state.notes

const activeNote = state => state.activeNote

const activeNoteText = state => state.activeNote.text

const active_chi = state => state.active_chi

const active_dataset = state => state.active_dataset

const active_volume = state => state.active_volume

const  active_vitual = state => state.active_vitual

const get_currentstorage = state => state.current_storage

export { getCount, notes, activeNote, activeNoteText,
         active_chi,active_dataset,active_volume,active_vitual,
         get_currentstorage,getLeftflag1,getLeftflag2,getLeftflag3,
         getLeftflag4,getLeftflag5
}
