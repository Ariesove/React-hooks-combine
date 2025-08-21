import {useRef} from 'react'

// 获取最新值
const ref = useRef(null)

const useLatest = (val):T=>{
  const ref = useRef(val);
  // 我能不能直接去返回,
  ref.current = val;
  return ref
}