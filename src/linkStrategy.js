import { Entity } from 'draft-js';

function linkStrategy(contentBlock, cb) {
  contentBlock.findEntityRanges(
    (character) => {
      const entityKey = character.getEntity();
      return (
        entityKey !== null &&
        Entity.get(entityKey).getType() === 'link'
      );
    },
    cb
  );
}

export default linkStrategy;
