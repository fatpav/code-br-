package com.codeclan.example.code_br_server_side;
import com.codeclan.example.code_br_server_side.models.User;
import org.junit.Before;
//import com.codeclan.example.code_br_server_side.models.User;
import com.codeclan.example.code_br_server_side.repositories.UserRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertEquals;


//@RunWith(SpringRunner.class)
//@SpringBootTest

public class CodeBrServerSideApplicationTests {

	private User user1;
	@Before
	public void setUp(){
		user1 = new User ("Json", "Jsonson", 33);
	}
//	@Autowired
//	UserRepository userRepository;

//	@Test
//	public void contextLoads() {
//	}

	@Test
	public void canGetUserFirstName(){
		assertEquals("Json", user1.getFirst_name());
	}

	@Test
	public void canGetUserLastName(){
		assertEquals("Jsonson", user1.getLast_name());
	}

	@Test
	public void canGetUserAge(){
		assertEquals(33, user1.getAge());
	}

}
