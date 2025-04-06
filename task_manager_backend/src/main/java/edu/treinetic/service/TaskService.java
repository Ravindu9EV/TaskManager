package edu.treinetic.service;

import edu.treinetic.dto.TaskDTO;

import java.util.List;

public interface TaskService{
    boolean addTask(TaskDTO taskDTO);
    boolean updateTask(TaskDTO taskDTO);
    TaskDTO findById(Long id);
    List<TaskDTO> getAll();
    boolean deleteTask(Long id);
}
