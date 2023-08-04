import ContentArticle from "./ContentArticle";
import TitleArticle from "./TitleArticle";
import PropTypes from "prop-types";

const Article = ({ userLogin }) => {
  return (
    <div>
      <TitleArticle title={"Article"} />
      <ContentArticle dataLogin={userLogin}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          debitis eos pariatur ullam repellendus reiciendis fuga nisi magnam
          totam dolores?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
          repellat nisi impedit quidem excepturi nulla illo? Cum, dolores
          incidunt tempore expedita iusto accusamus ea repellendus
          exercitationem blanditiis iure qui corrupti.
        </p>
      </ContentArticle>
    </div>
  );
};

Article.propTypes = {
  userLogin: PropTypes.string,
};

Article.default = {
  userLogin: "Belum Login",
};

export default Article;
