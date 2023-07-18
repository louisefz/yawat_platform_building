// This file is part of the YAWAT package.
// (c) 2007 Ulrich Germann. All rights reserved.
// This is NOT free software, but permission is granted to use this 
// software free of charge for academic research purposes.

var isBilingualLabel = new Object();
var biLabels = new Object(); // tags and descriptions for bilingual groups
var moLabels = new Object(); // tags and descriptions for monolingual groups

biLabels['unspec']      = 'unspecified correspondence';
biLabels['literal']     = 'literal translation';
biLabels['equivalence']   = 'equivalence';
biLabels['generalization']  = 'generalization';
biLabels['particularization'] = 'particularization';
biLabels['modulation']   = 'modulation';
biLabels['lexical_shift']   = 'lexical_shift';
biLabels['transposition']   = 'transposition';
biLabels['modulation_transposition']   = 'modulation_transposition';
biLabels['figurative']   = 'figurative';
biLabels['translation_error']   = 'translation_error';
biLabels['uncertain']   = 'uncertain';
biLabels['unaligned_explicitation']   = 'unaligned_explicitation';
biLabels['unaligned_reduction']   = 'unaligned_reduction';








defaultBiLabel = 'unspec';

moLabels['extra']       = 'untranslated';
moLabels['synsugar']    = 'syntactic sugar';
moLabels['unaligned']   = 'unaligned';
defaultMoLabel = 'unaligned';











