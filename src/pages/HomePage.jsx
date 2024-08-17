import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import InputSearch from "../components/InputSearch";
import { asyncPopulateUsersAndThreads } from "../states/shared/action";
import {
  asyncDownVoteThread,
  asyncNeutralizeVoteThread,
  asyncUpVoteThread,
} from "../states/threads/action";
import {
  ButtonAddThread,
  CategorySection,
  HeaderTitle,
  ThreadSection,
} from "../components";
import useSearch from "../hooks/useSearch";

const HomePage = () => {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);

  const [
    searchKeyword,
    handleSearchKeywordChange,
    searchCategory,
    handleSearchCategoryChange,
  ] = useSearch();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const categories = new Set(threads.map((thread) => thread.category));

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const threadList = threads
    .filter(
      (thread) =>
        thread.title?.toLowerCase().includes(searchKeyword?.toLowerCase()) &&
        thread.category?.toLowerCase().includes(searchCategory?.toLowerCase())
    )
    .map((thread) => ({
      ...thread,
      threadOwner: users.find((user) => user.id === thread.ownerId),
    }));

  const handleUpVoteThread = (id) => {
    if (!authUser) {
      navigate("/login");
    }
    dispatch(asyncUpVoteThread(id));
  };

  const handleDownVoteThread = (id) => {
    if (!authUser) {
      navigate("/login");
    }
    dispatch(asyncDownVoteThread(id));
  };

  const handleNeutralizeVoteThread = (id) => {
    if (!authUser) {
      navigate("/login");
    }
    dispatch(asyncNeutralizeVoteThread(id));
  };

  return (
    <div className="container my-4">
      <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between">
        <HeaderTitle
          title="Threads"
          subTitle="Find or start a new discussion"
        />
        {authUser && <ButtonAddThread />}
      </div>
      <div className="w-full max-w-5xl mt-8 mx-auto flex flex-col md:flex-row gap-8">
        <div className="flex-grow">
          <InputSearch
            placeholder="Search thread..."
            onChange={(e) => handleSearchKeywordChange(e.target.value)}
            value={searchKeyword}
          />
          <ThreadSection
            threadList={threadList}
            handleUpVoteThread={handleUpVoteThread}
            handleDownVoteThread={handleDownVoteThread}
            handleNeutralizeVoteThread={handleNeutralizeVoteThread}
          />
        </div>
        <CategorySection
          categories={categories}
          selectedCategory={searchCategory}
          onCategoryChange={handleSearchCategoryChange}
        />
      </div>
    </div>
  );
};

export default HomePage;
