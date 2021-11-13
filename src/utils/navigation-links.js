function navigationLinks(data, navigationName) {
  return data.navigation.map((links) => {
    if (links.name === navigationName) {
      return links.links;
    }
  });
}

export { navigationLinks };
