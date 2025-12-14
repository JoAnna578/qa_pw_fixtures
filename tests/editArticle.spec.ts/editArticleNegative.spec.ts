import { test } from '../_fixtures/fixturesArticles';
import { TITLE_CANNOT_BE_EMPTY } from '../../src/ui/constants/articleErrorMessages';
import createNewArticle, {
  ArticleData,
} from '../../src/ui/actions/article/createNewArticle';

test.describe('Edit Article Negative Tests', () => {
  test('Remove title', async ({
    createArticlePage,
    viewArticlePage,
    editArticlePage,
    articleWithTwoTags,
  }) => {
    // Tworzymy artykuł
    await createNewArticle(
      createArticlePage,
      viewArticlePage,
      articleWithTwoTags,
    );
    await viewArticlePage.clickEditArticleButton();

    // Testujemy usunięcie tytułu
    await editArticlePage.fillTitleField('');
    await editArticlePage.clickUpdateArticleButton();
    await editArticlePage.assertErrorMessageContainsText(TITLE_CANNOT_BE_EMPTY);
  });

  test('Remove description', async ({
    createArticlePage,
    viewArticlePage,
    editArticlePage,
    articleWithTwoTags,
  }) => {
    await createNewArticle(
      createArticlePage,
      viewArticlePage,
      articleWithTwoTags,
    );
    await viewArticlePage.clickEditArticleButton();

    await editArticlePage.fillDescriptionField('');
    await editArticlePage.clickUpdateArticleButton();
    // Dodaj asercję jeśli jest komunikat błędu dla opisu
  });

  test('Remove text', async ({
    createArticlePage,
    viewArticlePage,
    editArticlePage,
    articleWithTwoTags,
  }) => {
    await createNewArticle(
      createArticlePage,
      viewArticlePage,
      articleWithTwoTags,
    );
    await viewArticlePage.clickEditArticleButton();

    await editArticlePage.fillTextField('');
    await editArticlePage.clickUpdateArticleButton();
    // Dodaj asercję jeśli jest komunikat błędu dla treści artykułu
  });
});
