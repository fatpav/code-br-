package com.codeclan.example.code_br_server_side;

import com.codeclan.example.code_br_server_side.models.User;
import com.codeclan.example.code_br_server_side.repositories.UserRepository;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertEquals;


@RunWith(SpringRunner.class)
@SpringBootTest
class CodeBrServerSideApplicationTests {

	@Autowired
	UserRepository userRepository;

	@Test
	void contextLoads() {
	}

	@Test
	public void canGetUserFirstName(){
		User user1 = new User ("Json", "Jsonson", 33);
		assertEquals("Json", user1.getFirst_name());
	}

}
