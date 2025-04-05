package edu.treinetic.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Task {

    @Id
    private Long id;
    private String title;
    private String description;
    private String status;
    private LocalDateTime createdAt;
}
