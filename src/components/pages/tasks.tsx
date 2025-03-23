// import { selectTasks, updateFilter } from '@/redux/features/task/taskSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import TaskCard from '../module/tasks/TaskCard';
import AddTaskModal from '../module/tasks/AddTaskModal';
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs';

const Tasks = () => {
  // const tasks = useAppSelector(selectTasks);
  const dispatch = useAppDispatch();

  // console.log(tasks);

  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-end items-center gap-5">
        <h1 className="mr-auto">Tasks</h1>
        <Tabs defaultValue="all" className="w-full">
          <TabsList>
            <TabsTrigger
              onClick={() => dispatch(updateFilter('all'))}
              value="all"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter('high'))}
              value="high"
            >
              High
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter('medium'))}
              value="medium"
            >
              Medium
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter('low'))}
              value="low"
            >
              Low
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModal />
      </div>
      <div className="space-y-5 mt-5">
        {/* {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))} */}
      </div>
    </div>
  );
};

export default Tasks;
