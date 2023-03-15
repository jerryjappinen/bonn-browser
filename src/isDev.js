export default () => {
  if (!!(typeof process !== 'undefined' && process) && process.env) {
    const e = (process.env.NODE_ENV || '').toLowerCase()
    return e === 'development' || e === 'test'
  }

  return false
}
