var isHTMLTag = require('../src/is-html-tag.js');

describe('isHTMLTag', function() {
    'use strict';

    it('div: should be a tag', function() {
        expect(isHTMLTag('div')).toBe(true);
    });

    it('a: should be a tag', function() {
        expect(isHTMLTag('a')).toBe(true);
    });


    it('abbr: should be a tag', function() {
        expect(isHTMLTag('abbr')).toBe(true);
    });


    it('address: should be a tag', function() {
        expect(isHTMLTag('address')).toBe(true);
    });

    it('area: should be a tag', function() {
        expect(isHTMLTag('area')).toBe(true);
    });

    it('article: should be a tag', function() {
        expect(isHTMLTag('article')).toBe(true);
    });

    it('aside: should be a tag', function() {
        expect(isHTMLTag('aside')).toBe(true);
    });

    it('audio: should be a tag', function() {
        expect(isHTMLTag('audio')).toBe(true);
    });

    it('b: should be a tag', function() {
        expect(isHTMLTag('b')).toBe(true);
    });

    it('base: should be a tag', function() {
        expect(isHTMLTag('base')).toBe(true);
    });

    it('bdi: should be a tag', function() {
        expect(isHTMLTag('bdi')).toBe(true);
    });

    it('bdo: should be a tag', function() {
        expect(isHTMLTag('bdo')).toBe(true);
    });

    it('blockquote: should be a tag', function() {
        expect(isHTMLTag('blockquote')).toBe(true);
    });

    it('body: should be a tag', function() {
        expect(isHTMLTag('body')).toBe(true);
    });

    it('br: should be a tag', function() {
        expect(isHTMLTag('br')).toBe(true);
    });

    it('button: should be a tag', function() {
        expect(isHTMLTag('button')).toBe(true);
    });

    it('canvas: should be a tag', function() {
        expect(isHTMLTag('canvas')).toBe(true);
    });

    it('caption: should be a tag', function() {
        expect(isHTMLTag('caption')).toBe(true);
    });

    it('aside: should be a tag', function() {
        expect(isHTMLTag('aside')).toBe(true);
    });

    it('aside: should be a tag', function() {
        expect(isHTMLTag('aside')).toBe(true);
    });

    it('aside: should be a tag', function() {
        expect(isHTMLTag('aside')).toBe(true);
    });

    it('aside: should be a tag', function() {
        expect(isHTMLTag('aside')).toBe(true);
    });

    it('aside: should be a tag', function() {
        expect(isHTMLTag('aside')).toBe(true);
    });

    it('aside: should be a tag', function() {
        expect(isHTMLTag('aside')).toBe(true);
    });

    it('aside: should be a tag', function() {
        expect(isHTMLTag('aside')).toBe(true);
    });

    it('aside: should be a tag', function() {
        expect(isHTMLTag('aside')).toBe(true);
    });

    it('Div: should not be a tag', function() {
        expect(isHTMLTag('Div')).toBe(false);
    });

    it('Button: should not be a tag', function() {
        expect(isHTMLTag('Button')).toBe(false);
    });

});
