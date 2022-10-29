import StreamList from "./StreamList";
import StreamCreate from "./StreamCreate";
import StreamEdit from "./StreamEdit";
import StreamDelete from "./StreamDelete";
import StreamShow from "./StreamShow";
// eslint-disable-next-line
export const Stream = [
  {
    name: "StreamList",
    route: "/",
    components: StreamList,
    exact: true,
  },
  {
    name: "StreamCreate",
    route: "/streams/new",
    components: StreamCreate,
    exact: true,
  },
  {
    name: "StreamEdit",
    route: "/streams/edit/:id",
    components: StreamEdit,
    exact: true,
  },
  {
    name: "StreamDelete",
    route: "/streams/delete/:id",
    components: StreamDelete,
    exact: true,
  },
  {
    name: "StreamShow",
    route: "/streams/show",
    components: StreamShow,
    exact: true,
  },
];
