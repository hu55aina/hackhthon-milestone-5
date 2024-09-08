import { useRouter } from 'next/router';

export default function Resume({ resumeData }) {
  const router = useRouter();
  const { username } = router.query;

  return (
    <div>
      <h1>{username}'s Resume</h1>
      <div dangerouslySetInnerHTML={{ __html: resumeData }} />
    </div>
  );
}

// Fetch resume data from the server or database
export async function getServerSideProps(context) {
  const { username } = context.params;

  // Fetch resume data based on the username
  const resumeData = await fetchResumeFromDB(username); // Replace with actual data fetching

  return {
    props: {
      resumeData,
    },
  };
}
