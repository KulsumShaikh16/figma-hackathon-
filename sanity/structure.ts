import S from '@sanity/desk-tool/structure-builder';
import type { StructureResolver } from 'sanity/desk';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = () =>
  S.list()
    .title('Content')
    .items(S.documentTypeListItems());