package edu.treinetic.service;

import edu.treinetic.dto.TaskDTO;
import edu.treinetic.model.Task;
import edu.treinetic.repository.TaskRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.modelmapper.ModelMapper;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class TaskServiceImpl implements TaskService{

    private final TaskRepo repo;
    private final ModelMapper mapper;
//    add task to db
    @Override
    public boolean addTask(TaskDTO task){
        try{
            if(task!=null  && task.getTitle()!=null && task.getStatus()!=null && task.getDescription()!=null){
                repo.save(mapper.map(task,Task.class));
                return true;
            }

        }catch (Exception e){
            log.info(e.toString());
        }
        return false;
    }




    //------------edit task-------
    @Override
    public boolean updateTask(TaskDTO task){
        try{
            Optional<Task> tsk= repo.findById(task.getId());
            if(tsk.isPresent() ){
                if(task.getId()!=null && task.getTitle()!=null && task.getStatus()!=null && task.getDescription()!=null){

                    tsk.get().setDescription(task.getDescription());
                    tsk.get().setTitle(task.getTitle());
                    tsk.get().setStatus(task.getStatus());
                    tsk.get().setCreatedAt(task.getCreatedAt());
                    repo.save(tsk.get());
                    return true;
                }
            }

        }catch(Exception e){
            return  false;
        }
        return false;
    }

    //----------getAll Task-----------------
    @Override
    public List<TaskDTO> getAll(){
        List tasks=new ArrayList<>();
        for(Task task :repo.findAll()){
            if(task!=null){
                tasks.add(mapper.map(task,TaskDTO.class));
            }
        }
        return tasks;
    }

    //-----find by id---------
    @Override
    public TaskDTO findById(Long id){
        if(id!=null){
            Task t= repo.findById(id).get();
            return t!=null ? mapper.map(t,TaskDTO.class) : null;
        }
        return null;
    }

    // ----------Delete by id--------------
    @Override
    public boolean deleteTask(Long id){
        if(id!=null){
            repo.deleteById(id);
            return true;
        }
        return false;
    }
}
