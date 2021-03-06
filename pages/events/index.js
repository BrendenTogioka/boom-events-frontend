import EventItem from "@/components/eventItem";
import Layout from "@/components/layout";
import { API_URL, PER_PAGE } from "@/config/index";
import Pagination from "@/components/pagination";

export default function EventsPage({ events, total, page }) {
  return (
    <Layout>
      <h1>Events</h1>
      {events.length === 0 && <h3>No Events to Show</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}

      <Pagination total={total} page={page} />
    </Layout>
  );
}

export async function getServerSideProps({ query: { page = 1 } }) {
  //Calc start page
  const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE;

  // Fetch total/count
  const totalRes = await fetch(`${API_URL}/events/count`);
  const total = await totalRes.json();

  // Fetch Events
  const eventRes = await fetch(
    `${API_URL}/events?_sort=date:ASC&_limit=${PER_PAGE}&_start=${start}`
  );
  const events = await eventRes.json();

  return {
    props: { events, page: +page, total },
  };
}
