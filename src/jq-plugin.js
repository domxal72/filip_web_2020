import React from 'react'
import $ from 'jquery'

export default class JQPlugin extends React.Component {
  componentDidMount() {
    this.$el = $(this.el);

    $('.header-section-portfolio .fa').hide();
    $('#about').hide();

    // SHOW BIG MODAL IMAGE ON PORTFOLIO IMAGE CLICK
    function showModal() {
      // active only for smaller screens than screenWidth value
      var screenWidth = 550;
      if ($(window).width() > screenWidth) {
        $('.image-list-item').removeClass('show');
        $(this).addClass('show');
        $('.modal-image').html($('.show').clone().removeClass('image-list-item'));
        $('.modal-window').fadeIn(100);
      };
    };

    function prevImg() {
      $('.image-list-item.show').addClass('old-show').removeClass('show');
      if ($('.portfolio-gallery .old-show').is(':first-child')) {
        $('.image-list-item').last().addClass('show');
      } else {
        $('.old-show').prev().addClass('show');
      }
      $('.old-show').removeClass('old-show');
      $('.modal-image').html($('.image-list-item.show').clone().removeClass('image-list-item'));
    };

    function nextImg() {
      $('.image-list-item.show').addClass('old-show').removeClass('show');
      if ($('.portfolio-gallery .old-show').is(':last-child')) {
        $('.image-list-item').first().addClass('show');
      } else {
        $('.old-show').next().addClass('show');
      }
      $('.old-show').removeClass('old-show');
      $('.modal-image').html($('.image-list-item.show').clone().removeClass('image-list-item'));
    };

    function closeModal() {
      $('.modal-window').fadeOut(100);
      function time() {
        $('.modal-image').empty();
      }
      setTimeout(time, 100);
    };

    function headerActiveSection() {
      $('header > a').removeClass('header-section-active');
      $(this).addClass('header-section-active');
    };

    function showPortfolio() {
      $('#portfolio').show();
      $('#about').hide();
    };

    function showAbout() {
      $('#portfolio').hide();
      $('#about').show();
    };

    function changeSection() {
      if ($(window).scrollTop() > $('#about').height()) {
        $('header > a').removeClass('header-section-active');
        $('.portfolio-header').addClass('header-section-active');
      } else {
        $('header > a').removeClass('header-section-active');
        $('.about-header').addClass('header-section-active');
      }
    };

    /* TRIGGER FUNCTIONS */
    $('.image-list-item').on('click', showModal);
    $('.arrow-prev').on('click', prevImg);
    $('.arrow-next').on('click', nextImg);
    $('.close').on('click', closeModal);
    // $('.modal-bg').on('click', closeModal);
    $('header > a').on('click', headerActiveSection);
    // $(window).on('scroll', changeSection);
    $('.portfolio-header').on('click', showPortfolio);
    $('.about-header').on('click', showAbout);

    $(document).keydown(function (e) {
      if (e.keyCode == 37) {
        prevImg();
      } else if (e.keyCode == 39) {
        nextImg();
      };
    });
  }

  componentWillUnmount() {

  }

  render() {
    return <div ref={el => this.el = el} />;
  }
}