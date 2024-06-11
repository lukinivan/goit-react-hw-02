import css from "./Profile.module.css";

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.card}>
      <div className={css.userInfo}>
        <img className={css.img} src={avatar} alt="User avatar" />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.statsList}>
        <li className={css.item}>
          <span className={css.itemDesc}>Followers</span>
          <span className={css.itemVal}>{followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.itemDesc}>Views</span>
          <span className={css.itemVal}>{views}</span>
        </li>
        <li className={css.item}>
          <span className={css.itemDesc}>Likes</span>
          <span className={css.itemVal}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
