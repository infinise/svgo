'use strict';

exports.type = 'perItem';

exports.active = false;

exports.description = 'removes even more attributes';

/**
 * Removes even more attributes.
 *
 * @param {Object} item current iteration item
 * @return {Boolean} if false, item will be filtered out
 *
 * @author Philipp Antoni
 */
exports.fn = function(item) {

  var attrs = [
    'enable-background',
    'fill-rule',
    'clip-rule',
    'preserveAspectRatio',
    'id',
    'class'
  ];

  attrs.forEach(function(attr){
    if (item.hasAttr(attr)) item.removeAttr(attr);
  });

};
