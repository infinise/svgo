'use strict';

exports.type = 'perItem';

exports.active = true;

exports.description = 'removes bounds elements';

/**
 * Remove bounds element.
 *
 * @param {Object} item current iteration item
 * @return {Boolean} if false, item will be filtered out
 *
 * @author Philipp Antoni
 */
exports.fn = function(item) {

  var colors = ['#f0f', '#ff00ff', 'magenta'];

  if (
    item.hasAttr('fill') &&
    colors.indexOf( item.attr('fill').value.toLowerCase() ) > -1
  )
    return false;

};
