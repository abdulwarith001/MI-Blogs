const notFound = (req, res) => {
  res.status(404).json({ message: "Page does not exist on this server..." });
};

export default notFound;
