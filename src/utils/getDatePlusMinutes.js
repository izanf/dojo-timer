const getDatePlusMinutes = (minutes) => {
  const date = new Date()

  date.setMinutes(date.getMinutes() + minutes)

  return date
}

export default getDatePlusMinutes
