const { buildSuccObject } = require('../utils');
const TimelineM = require('../../models/timeline_records');

/**
 * Deletes an item from database by id
 * @param {object} id - find obj
 */
const deleteItem = async (body = {}, model, deleteTimelineRelated) => {
  try {
    // Perform the deletion.
    const data = await model.deleteMany({ ...body });

    // If additional related deletions are required.
    if (deleteTimelineRelated) {
      await TimelineM.updateMany({}, { $pull: { templates: { templateId: body.uuid } } }, { multi: true });
    }

    // Return success object.
    return buildSuccObject('DELETED', data);
  } catch (error) {
    // If an error occurs, throw it.
    throw error;
  }
};

const findAndDelete = async (body = {}, model) => {
  try {
    // Find entries before deletion to capture them.
    const deletedEntries = await model.find({ ...body });

    // Perform the deletion.
    const data = await model.deleteMany({ ...body });

    // Attach the found entries to the deletion result.
    data.deletedEntries = deletedEntries;

    // Return success object.
    return buildSuccObject('DELETED', data);
  } catch (error) {
    // If an error occurs, throw it.
    throw error;
  }
};

module.exports = {
  deleteItem,
  findAndDelete
};
