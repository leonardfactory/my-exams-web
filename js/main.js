$(document).ready(function()
{
	var win = $(window);
	var isSmall = win.width() < 1024;
	win.resize(function () 
	{
		var width = win.width();
		if(width < 1024 && !isSmall)
		{
			$('.bit-small.left').each(function()
			{
				var $this = $(this);
				$this.next().after($this);
			});
			isSmall = true;
		}
		else if(width >= 1024 && isSmall)
		{
			$('.bit-small.left').each(function()
			{
				var $this = $(this);
				$this.prev().before($this);
			});
			isSmall = false;
		}
	});
});