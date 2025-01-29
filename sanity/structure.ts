//import S from '@sanity/desk-tool/structure-builder';
import StructureResolver from '@sanity/desk-tool/structure-builder';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S: any) =>
  S.list()
    .title('Content')
    .items(S.documentTypeListItems());