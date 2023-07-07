import { fetchAllProjects } from "@/lib/action";
import { ProjectInterface } from "@/types/common.types";

type SearchParams = {
  category?: string | null;
  endcursor?: string | null;
}

type Props = {
  searchParams: SearchParams
}

type ProjectSearch = {
  projectSearch: {
    edges: { node: ProjectInterface }[];
    pageInfo: {
      hasPreviousPage: boolean;
      hasNextPage: boolean;
      startCursor: string;
      endCursor: string;
    };
  },
}


const Home = async ({ searchParams: { category, endcursor } }: Props) => {
  const data = await fetchAllProjects(category, endcursor) as ProjectSearch

  const projectsToDisplay = data?.projectSearch?.edges || [];

  if (projectsToDisplay.length === 0) {
    return (
      <section className="flexStart flex-col paddings">


        Categories

        <p className="no-result-text text-center">No projects found, go create some first.</p>
      </section>
    )
  }
  return (
    <section className="flexStart flex-col paddings mb-16">

      Categories

      <section className="projects-grid">
        {projectsToDisplay.map(({ node }: { node: ProjectInterface }) => (

          <>
            <h1>Project Card</h1>
          </>
        ))}
      </section>

      Load More

    </section>
  );
};
export default Home;
