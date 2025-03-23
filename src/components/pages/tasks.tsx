import TaskCard from '../module/tasks/TaskCard';
import AddTaskModal from '../module/tasks/AddTaskModal';
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs';
import { useGetTasksQuery } from '@/redux/api/baseApi';
import { ITask } from '@/types';

const Tasks = () => {
  const { data, isLoading, isError } = useGetTasksQuery(undefined);
  console.log({ data, isLoading, isError });

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
        {!isLoading &&
          data.tasks.map((task: ITask) => (
            <TaskCard task={task} key={task.id} />
          ))}
      </div>
    </div>
  );
};

export default Tasks;
