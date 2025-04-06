package edu.treinetic.controller;

import edu.treinetic.dto.TaskDTO;
import edu.treinetic.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/task")
@CrossOrigin
public class TaskController {

    @Autowired
    private TaskService taskService;

    @PostMapping("/add")
    @ResponseStatus(HttpStatus.OK)
    public boolean addTask(@RequestBody TaskDTO taskDTO){
        System.out.println(taskDTO);
        return taskService.addTask(taskDTO);
    }

    @GetMapping("/find/{id}")
    @ResponseStatus(HttpStatus.OK)
    public TaskDTO findById(@PathVariable Long id){
        return taskService.findById(id);
    }

    @PutMapping("/edit")
    @ResponseStatus(HttpStatus.OK)
    public boolean edit(@RequestBody TaskDTO taskDTO){
        return taskService.updateTask(taskDTO);
    }

    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.OK)
    public boolean delete(@PathVariable Long id){
        return taskService.deleteTask(id);
    }

    @GetMapping("/all")
    @ResponseStatus(HttpStatus.OK)
    public List<TaskDTO> getAll(){
        return taskService.getAll();
    }
}
