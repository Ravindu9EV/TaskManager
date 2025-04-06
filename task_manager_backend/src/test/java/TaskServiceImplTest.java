import edu.treinetic.dto.TaskDTO;
import edu.treinetic.repository.TaskRepo;
import edu.treinetic.service.TaskService;
import edu.treinetic.service.TaskServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;

import java.time.LocalDateTime;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.*;

public class TaskServiceImplTest {
    private TaskRepo repo;
    private ModelMapper mapper;
    private TaskService service;

    @BeforeEach
    void setUp(){
        repo=mock(TaskRepo.class);
        mapper=new ModelMapper();
        service=new TaskServiceImpl(repo,mapper);
    }

    private TaskDTO createTaskDTO(){
        return new TaskDTO(1L,"Test Task","Test Desc","Pending", LocalDateTime.now());
    }

    @Test
    void testAddTask_validTask_shouldReturnTrue(){
        TaskDTO dto=createTaskDTO();
        boolean result = service.addTask(dto);
        assertTrue(result);
        verify(repo,times(1)).save(any());

    }
}
