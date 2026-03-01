export const notFound = (req, res) => {
  res.status(404)
  throw new Error("Route Not Found")
}

export const errorHandler = (err, req, res, next) => {
  res.status(res.statusCode || 500).json({
    message: err.message
  })
}
