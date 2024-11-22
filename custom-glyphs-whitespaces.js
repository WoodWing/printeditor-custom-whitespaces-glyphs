(function() {

    /**
     * Add a new group to the top of print editor glyps panel 
    */
    window.peGlyphs.groups.unshift ({
        groupName: 'Stars',
        glyphs: [            
            {
                name: '★',
                unicode: 'U+2605',
            },
            {
                name: '✰',
                unicode: 'U+2730',
            },
            {
                name: '✵',
                unicode: 'U+2735',
            },
            {
                name: '✯',
                unicode: 'U+272F',
            }
        ],
    });

    /**
    * Add a new group to the bottom of print editor whitespaces panel 
    */
    window.peWhiteSpaces.groups.push ({    
            groupId: '5',
            whiteSpaces: [
                { name: 'My custom space 1', unicode: 'U+0009' },
                { name: 'My custom space 2', unicode: 'U+0009' },
            ],        
    });

    /**
     * Modifying existing glyphs by removing and replacing the item
     */
    const starsGroup = window.peGlyphs.groups.find(group => group.groupName === 'Currency');
    const targetGlyphIndex = starsGroup.glyphs.findIndex(glyph => glyph.name === 'Euro');
    starsGroup.glyphs.splice(targetGlyphIndex, 1, {
        ...starsGroup.glyphs[targetGlyphIndex],
        unicode: 'U+24BA'
    });

    /**
     * Modifying existing whitespaces unicode by removing and replacing the item
     */
    const groupWithId3 = window.peWhiteSpaces.groups.find(group => group.groupId === '3');
    const targetWhiteSpaceIndex = groupWithId3.whiteSpaces.findIndex(whiteSpace => whiteSpace.name === 'LBL_HAIR_SPACE');
    groupWithId3.whiteSpaces.splice(targetWhiteSpaceIndex, 1, {
        ...groupWithId3.whiteSpaces[targetWhiteSpaceIndex],
        unicode: 'U+0398'
    });

    /**
     * Modifying existing whitespaces shortcuts by removing and replacing the item
     */
    const groupWithId2 = window.peWhiteSpaces.groups.find(group => group.groupId === '2');
    const targetShortcutIndex = groupWithId2.whiteSpaces.findIndex(whiteSpace => whiteSpace.name === 'LBL_NO_BREAK_SPACE');
    groupWithId2.whiteSpaces.splice(targetShortcutIndex, 1, {
        ...groupWithId2.whiteSpaces[targetShortcutIndex],
        shortcut: 'alt+mod+T'
    });
})();   
