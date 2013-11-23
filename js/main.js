$(document).ready(function()
{
	var win = $(window);
	
	var resizeWithWidth = function(width)
	{
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
	}
	
	var isSmall = win.width() < 1024;
	if(isSmall)
	{
		// Force redrawing
		isSmall = !isSmall;
		resizeWithWidth(win.width());
	}
	
	win.resize(function(){
		resizeWithWidth(win.width());
	});
});