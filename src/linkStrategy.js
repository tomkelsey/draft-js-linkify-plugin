function linkStrategy(contentBlock, cb, contentState) {
  contentBlock.findEntityRanges(
    (character) => {
      const entityKey = character.getEntity();
      return (
        entityKey !== null &&
        contentState.getEntity(entityKey).getType() === 'link'
      );
    },
    cb
  );
}

export default linkStrategy;
