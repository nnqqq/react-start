package l.k.h;

import java.text.DateFormat;
import java.util.Date;
import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	/**
	 * Simply selects the home view to render by returning its name.
	 */
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Locale locale, Model model) {
		logger.info("Welcome home! The client locale is {}.", locale);
		
		Date date = new Date();
		DateFormat dateFormat = DateFormat.getDateTimeInstance(DateFormat.LONG, DateFormat.LONG, locale);
		
		String formattedDate = dateFormat.format(date);
		
		model.addAttribute("serverTime", formattedDate );
		
		return "home";
	}
	
	@RequestMapping(value = "/kook", method = RequestMethod.GET)
	public String kook() {
		logger.info("controller in kook");
		return "kook";
	}
	
	@RequestMapping(value = "/kook1", method = RequestMethod.GET)
	public String kook1() {
		logger.info("controller in kook1");
		return "kook1";
	}	
	
	@RequestMapping(value = "/kook2", method = RequestMethod.GET)
	public String kook2() {
		logger.info("controller in kook2");
		return "kook2";
	}	
		
	@RequestMapping(value = "/kook3", method = RequestMethod.GET)
	public String kook3() {
		logger.info("controller in kook3");
		return "kook3";
	}
	
	@RequestMapping(value = "/kook4", method = RequestMethod.GET)
	public String kook4() {
		logger.info("controller in kook4");
		return "kook4";
	}	
	

}
