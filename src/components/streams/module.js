import StreamList from "./StreamList";
import StreamCreate from "./StreamCreate";
import StreamEdit from "./StreamEdit";
import StreamDelete from "./StreamDelete";
import StreamShow from "./StreamShow";

export const Stream = [
  {
    name: "StreamList",
    route: "/",
    components: StreamList,
  },
  {
    name: "StreamCreate",
    route: "/streams/new",
    components: StreamCreate,
  },
  {
    name: "StreamEdit",
    route: "/streams/edit",
    components: StreamEdit,
  },
  {
    name: "StreamDelete",
    route: "/streams/delete",
    components: StreamDelete,
  },
  {
    name: "StreamShow",
    route: "/streams/show",
    components: StreamShow,
  },
];
