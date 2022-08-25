import '../styles/components/Loading.scss';

function Loading(props) {
  return props.loading ? <span className="loading" /> : null;
}

export default Loading;
