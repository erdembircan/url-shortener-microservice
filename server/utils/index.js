/**
 * auto increment mongodb property
 * @param {String} propertyId - property Id
 * @param {Object} collectionObject - collection object
 * @returns {Number} - incremented value
 */
function incrementSequence(propertyId, collectionObject) {
  return collectionObject
    .findOneAndUpdate(
      { _id: propertyId },
      { $inc: { sequence_value: 1 } },
      { returnNewDocument: true }
    )
    .then(obj => obj.value.sequence_value);
}

module.exports = {
  incrementSequence,
};
