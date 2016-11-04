'use strict';

exports.type = 'perItem';

exports.active = true;

exports.description = 'converts width and height to viewBox';

/**
 * Converts width and height to viewBox.
 *
 * @example
 * <svg width="100" height="50">
 *   ↓
 * <svg viewBox="0 0 100 50">
 *
 * @param {Object} item current iteration item
 * @return {Boolean} if false, item will be filtered out
 *
 * @author Philipp Antoni
 */
exports.fn = function(item) {

    if (
        item.isElem('svg') &&
        item.hasAttr('width') &&
        item.hasAttr('height')
    ) {

        if (item.hasAttr('viewBox') === false) {
            item.addAttr({
                name: 'viewBox',
                value: '0 0 ' + item.attr('width').value + ' ' + item.attr('height').value,
                prefix: '',
                local: 'viewBox'
            });
        }

        item.removeAttr('width');
        item.removeAttr('height');

    }

};
